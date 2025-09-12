---
title: Flutter BloC + Freezed
date: '2022-05-20T13:48:09.071Z'
categories: ["Blog","Github","Flutter"]
keywords: ["Blog","Github","Flutter"]
slug: /@furkanolkay/flutter-bloc-freezed
tags: ["Blog","Github","Flutter"]
---

Hello everyone,

In this blog, I wanted to share the English version of my blog discussing how to create an effective **_state management_** structure using **_BloC_** and **_Freezed_**.

### Let’s Get Started!

![flutter-bloc-image](/blog/img/0*MgvLQ3Z1E4-gr92m.webp)

In the screenshot above, I will demonstrate the **_BloC_** and **_Freezed_** structure by writing the application.

First, let’s add the necessary packages to our **_pubspec.yaml_** file.

The packages we need to add under `_dependencies_` are **_flutter_bloc_** and **_freezed_annotation_**. The packages we need to add under `_dev_dependencies_` are **_build_runner_**, **_freezed_**, and **_json_serializable_**. Also, don’t forget to add the **_dio_** package under dependencies for our API requests.

To generate code on the **_Freezed_** side, I am installing the **_build runner_** extension for **_VS Code_**. Of course, you can run it directly in the **_script_** as well.

```bash
flutter pub run build_runner build
```

### The structure of my project is as follows:

![flutter-bloc-image](/blog/img/1__uI54oYQoT0g__ErHb8DKj4g.jpeg)

### How to Create a Model with Freezed?

```dart
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter/foundation.dart';

part 'coin_model.freezed.dart';
part 'coin_model.g.dart';

@freezed
class CoinModel with _$CoinModel {
  const factory CoinModel({
    required final String id,
    required final String rank,
    required final String symbol,
    required final String name,
    required final String supply,
    final String? maxSupply,
    required final String marketCapUsd,
    required final String volumeUsd24Hr,
    required final String priceUsd,
    required final String changePercent24Hr,
    final String? vwap24Hr,
  }) = _CoinModel;

  factory CoinModel.fromJson(Map<String, dynamic> json) =>
      _$CoinModelFromJson(json);
}
```

By wrapping this model with **_Freezed_**, we’ve added some basic features. We also added the **_JsonSerialize_** methods this way. The critical part of creating this model is running the **_build runner_** after adding the **_paths_**, which will generate two new files in the same directory.

### Let’s Write a Simple API Service

```dart
import 'package:coin_example/core/model/coin_model.dart';
import 'package:dio/dio.dart';

abstract class ICoinService {
  final Dio dio;
  ICoinService(this.dio);

  Future<List<CoinModel>> fetchCoins();
}

class CoinService extends ICoinService {
  CoinService({required Dio dio}) : super(dio);

  @override
  Future<List<CoinModel>> fetchCoins() async {
    final response = await dio.get('${Api.baseUrl}${Api.assets}');
    final data = response.data['data'];
    return data.map<CoinModel>((json) => CoinModel.fromJson(json)).toList();
  }
}
```

```dart
enum Api {
  baseUrl,
  assets,
}

extension ApiExtension on Api {
  String get url {
    switch (this) {
      case Api.baseUrl:
        return '[URL]';
      case Api.assets:
        return 'assets';
    }
  }
}
```

We will use the **_dio_** package we added to the project to write a service. By creating a service class, we communicate our requests through it.

Now let’s see how we use our service on the **_BloC_** side.

To add **_Bloc_** files, I’m using the **_bloc extension_**. If you’re using **_VS Code_**, you can create **_bloc_** files by right-clicking and selecting **_new bloc_**.

### Let’s Create the BloC Structure with Freezed

The **_BloC_** structure consists of **_State_**, **_Event_**, and the main **_bloc_** section where functions are called.

```dart
part of 'home_bloc.dart';

@freezed
class HomeState with _$HomeState {
  const factory HomeState.loading() = _Loading;
  const factory HomeState.loaded({required final List<CoinModel> items}) =
      _Loaded;
}
```

I defined two different states: the loading state that will be active during loading and the **_loaded state_** that will return when finished, along with the **_CoinModel list_**. As we write the code, files will be regenerated, and errors will be resolved.

```dart
part of 'home_bloc.dart';

@freezed
class HomeEvent with _$HomeEvent {
  const factory HomeEvent.load() = _Load;
}
```

I created an event called **_Load_**. This **_event_** allows us to call functions in the **_bloc_**.

```dart
import 'package:bloc/bloc.dart';
import 'package:coin_example/core/service/coin_service.dart';
import 'package:freezed_annotation/freezed_annotation.dart';

import '../../../core/model/coin_model.dart';

part 'home_event.dart';
part 'home_state.dart';
part 'home_bloc.freezed.dart';

class HomeBloc extends Bloc<HomeEvent, HomeState> {
  final CoinService coinService;
  HomeBloc(this.coinService) : super(const _Loading()) {
    on<_Load>(_onLoad);
  }

  Future<void> _onLoad(_Load event, Emitter<HomeState> emit) async {
    final val = await coinService.fetchCoins();
    emit(HomeState.loaded(items: val));
  }
}
```

We call our functions using **_on<Event>(eventFunction)_**. Here, our **_onLoad_** function fetches our data from the service and sends it to the interface. Also, the **_initial_** state is set as **_Loading_**.

### Finally, Let’s Look at the User Interface

We wrap the part of the interface that needs to be aware of the states with **_BlocProvider_**.

```dart
 HomeBloc(CoinService(dio: Dio()))..add(const HomeEvent.load())
```

By using **_..add_** in the **_create_** parameter of **_BlocProvider_**, we initiated the data-fetching process by executing the **_onLoad_** function. Finally, we receive the **_Loaded_** state and our **_CoinModel list_**.

The **_BlocBuilder_** section is triggered during state refresh events and allows this part to be rebuilt.

In **_BlocBuilder_**, by calling **_state.when_**, we see one of the best features provided by **_Freezed_**. We can see the states defined on the **_HomeState_** side and provide the widgets to be displayed in those states.

```dart
 BlocBuilder<HomeBloc, HomeState>(
          builder: (context, state) {
            return state.when(
              loading: () => LoadProgressStateWidget(),
              loaded: (_models) => LoadSuccessStateWidget(_models),
            );
          },
        )
```

Yes, it’s that simple. It definitely has a more effective usage than normal and has added many features to our classes. Normally, we would have to write extra code for these features.

**Happy Coding to Everyone!**

---

*Interested in more Flutter development content? Check out my other tutorials on [Flutter Stream Structure](/blog/stream_flutter-blog/) and [Flutter Drag & Drop](/blog/drag-drop-flutter-blog/).*