---
title: Flutter Drag&Drop
date: '2022-02-02T08:30:03.770Z'
categories: ["Blog","Flutter","Github"]
keywords: ["Blog","Flutter","Github"]
slug: /@furkanolkay/flutter-drag-drop
tags: ["Blog","Flutter","Github"]

---

![drag-drop-flutter](/blog/img/1__ZAKzqQLvxZVlOCjtYXlJ8w.gif)

Hello everyone 👋 In this article, I will explain how to perform **Drag&Drop** operations in **Flutter**.

Essentially, we use two main widgets for **Drag&Drop** operations.

[**Draggable**](https://api.flutter.dev/flutter/widgets/Draggable-class.html): This widget represents the draggable part, where we define the widgets we want to drag.

[**DragTarget**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html): This widget represents the area that can accept the draggable widget, allowing us to accept draggable widgets with necessary condition checks.

**_Drag&Drop_** generally provides convenience and ease of use in applications. For instance, if we want to create a sortable list by the user, we can do this quite easily using [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) and [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html). Otherwise, we would have to rely on packages, which I prefer to avoid unless necessary. I believe most people feel the same way.

### **Let’s Get Started!**

To analyze the widgets we will use for **_Drag & Drop_**, I created a scenario. It resembles those Barbie dress-up games 😂

![drag-drop-flutter](/blog/img/1__kpcYhmsuE4__AkCpCkRoSUw.png)

We will have two different targets. One will target the upper part of the body, while the other will target the lower part, meaning we will put on a **Tshirt** for the upper body and **Jean** for the lower.

First, let’s define the body parts.

```dart
abstract class LowerBody {
  final String name;
  final String imageUrl;

  LowerBody(this.name, this.imageUrl);

  void wear() {
    print('$name worn - lower');
  }
}
```

Similarly, we define the upper body as **UpperBody**.

Now let’s create a few clothing items that will inherit from these classes. We will inherit the items for the upper body from **UpperBody** and for the lower body from **LowerBody**.

```dart
import 'upper_body.dart';

class Tshirt extends UpperBody {
  Tshirt(String name, String imageUrl) : super(name, imageUrl);
}
```

We will also create **_Hoodie_** from **_UpperBody_** and **_Jean_**, **_Trousers_** from **_LowerBody_**.

![drag-drop-flutter](/blog/img/1__7il3Slx5ty__Ph2kWVmJpHA.png)

Now let’s create a mock repository.

```dart
import 'model/hoodie.dart';
import 'model/jean.dart';
import 'model/trousers.dart';
import 'model/tshirt.dart';

class ClothesRepository {
  Tshirt getTshirtById(int id) => Tshirt('Tshirt',
      'https://png.clipart.me/previews/b98/t-shirt-vector-template-illustrator-26174.png');

  Hoodie getHoodieById(int id) => Hoodie('Hoodie',
      'https://cdn.pixabay.com/photo/2013/07/12/15/54/sweater-150533_1280.png');

  Jean getJeanById(int id) => Jean('Jean',
      'https://images.vexels.com/media/users/3/142631/isolated/preview/c32fc2bd1003f31fff074fa2d30a21c8-simple-jean-clothing.png');

  Trousers getTrousers(int id) => Trousers('Trousers',
      'https://pixsector.com/cache/5b3790fa/av1ada5e8276b9ab6e4f5.png');
}
```

Now that our data is ready, we can create the interface and our [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widget.

Since we can place different types of clothing in the widget, we will create our widget as **_Generic_**. There are two types of [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html): [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) and [**_LongPressDraggable_**](https://api.flutter.dev/flutter/widgets/LongPressDraggable-class.html). We can use whichever we prefer. Directly defining [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) can cause issues when using Scroll, so in such cases, it’s better to opt for **_LongPress_**, as it allows us to set a **_delay_** for pressing.

The [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widget takes our main design widget in **_child_**, accepts a widget in **_feedback_** to modify the design during dragging, and in **_childWhenDragging_**, we can show a different design for the [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) during dragging. The **_axis_** property of the [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widget allows us to determine the direction of dragging and restrict the movement direction.

```dart
import 'package:flutter/material.dart';

class DraggableWidget<T> extends StatelessWidget {
  final T model;
  final String title;
  final String url;
  const DraggableWidget({
    Key? key,
    required this.model,
    required this.title,
    required this.url,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Draggable<Object>(
      feedback: _clothesImage(url),
      child: Column(
        children: [
          Text(title),
          _clothesImage(url),
        ],
      ),
      data: model,
    );
  }

  Widget _clothesImage(String url) => Image.network(url, width: 100, height: 100);
}
```

Lastly, we have functions that trigger events such as the beginning, ending, or canceling of the drag operation.

We put the **_model_** we sent inside the **_data_** field of the [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html). This way, during drag events, we can access the data inside and process it with the [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html).

Now let’s create a Gardrobe widget using this **_DraggableWidget_**.

```dart
final Tshirt tshirt = _clothesRepository.getTshirtById(0);

DraggableWidget<Tshirt>(
    model: tshirt,
    title: tshirt.name,
    url: tshirt.imageUrl,
),
```

We create the example clothing items by retrieving them from the repository in this way.

![drag-drop-flutter](/blog/img/1____9pK8x1Cm__KHIVNbxTtb9g.png)

Now that we have created our Gardrobe, let’s get to the [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html) part. So far, we have created our draggable widgets. The area where we will drag them will be created by [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html). Let’s write our widget containing the targets.

![drag-drop-flutter](/blog/img/1__yThCi9HXGEL6TXxYgYm1Bw.png)

```dart
DragTarget<LowerBody>(
    builder: (context, items, _) {
      return _clothesWidget(url: lowUrl);
    },
    onAccept: (item) {
      item.wear();
      lowUrl = item.imageUrl;
      setState(() {});
    },
    /* Optional checks for specificity can be added!
    onWillAccept: (data) {
        if (data is Trousers) {
            print('acceptable');
            return true;
        } else {
            print('unacceptable');
            return false;
        }
    }, */
    /* This triggers on all movements in the area!
    onMove: (details) => print(details.data.name),*/
    /* This triggers when leaving the area!
    onLeave: (data) => print(data?.name ?? ''),*/
),
```

We created our **_LowerBody_** **_DragTarget_**. In the **_onAccept_** section of the [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html), we perform the actions we want when an item is accepted. In this example, I retrieved the clothing's **_imageUrl_** and placed it in the [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html) view, allowing us to see the visual of the dragged [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widget on the [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/Drag

Target-class.html). We should also create the **_UpperBody_** target similarly.

The [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widgets we created could accept different types of clothing. These types, inherited from **_UpperBody_** and **_LowerBody_**, allow the created [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html) to accept subtypes like **_Hoodie_**, **_Tshirt_** for **_UpperBody_** and **_Jean_**, **_Trousers_** for **_LowerBody_**.

There are many checks available for [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html). Generally, we can use **_onWillAccept_** to perform necessary actions before dropping the dragged [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widget. While dragging the [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widget over the [**_DragTarget_**](https://api.flutter.dev/flutter/widgets/DragTarget-class.html), the **_Move_** function is continuously triggered, and when leaving the target area, we can observe the **_onLeave_** function being triggered. Since we may need to write specific actions for these, they are quite critical.

Additionally, we will write the **_clothesWidget_** used within.

```dart
Widget _clothesWidget({String? url}) => Container(
    width: 100,
    height: 100,
    decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.black),
    ),
    alignment: Alignment.center,
    child: url != null ? _clothesImage(url) : const SizedBox(),
);

Widget _clothesImage(String url) => Image.network(
    url,
    width: 100,
    height: 100,
);
```

We have created all the necessary areas. Now we can run our app and see what we have done.

### Here’s Our Demo!

![drag-drop-flutter](/blog/img/1__86due8Wwb8XwsojdQYeygg.gif)

To summarize, we created two **_Targets_** and dragged different [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widgets to them, taking different actions. By accepting the [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) widgets of its own type (inherited), it retrieved their **_imageUrl_**. When we dragged a [**_Draggable_**](https://api.flutter.dev/flutter/widgets/Draggable-class.html) of a different **_generic_** type, it was not accepted since it was not its own subclass.

I tried to explain the **_Drag & Drop_** event in detail, and I hope you found it engaging 🤓

Instead of sharing the code for the pages of the project directly, I preferred to share the key points, but you can find the entire source code of the project [**here**](https://github.com/furkay/drag_example).

---

*Want to learn more about Flutter development? Check out my other tutorials on [Flutter BloC + Freezed](/blog/bloc-flutter-blog/) and [Flutter Stream Structure](/blog/stream_flutter-blog/).*

**Connect with me:**
- Twitter: [**_FurkayOlkay_**](http://twitter.com/FurkayOlkay)
- Github: [**_github.com/furkay_**](http://github.com/furkay)
- [Contact me](/contact/) for questions or collaborations