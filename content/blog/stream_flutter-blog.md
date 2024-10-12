---
title: Flutter Stream Structure
date: '2022-09-01T19:23:53.496Z'
categories: ["Blog","Github", "Flutter"]
keywords: ["Blog","Github", "Flutter"]
slug: /@furkanolkay/flutter-stream-structure
tags: ["Blog","Github", "Flutter"]
---

Hello everyone! In this article, I will explain the use of **_Stream_** in **_Flutter_** through an example.

### What is a Stream?

We can define it as a pipeline with a flow of data. There is a circulation of data in the stream. Data enters the flow and is delivered to those who want to listen to it.

### Let's Create a Stream!

To create a **_Stream_**, we first need a **_Controller_**. We will create a **_Stream_** using **_StreamController_**. This way, we can facilitate data communication over the **_Stream_**.

```dart
late final StreamController<T> _streamController = StreamController<T>();
```

We can access the **_Stream_** through the **_StreamController_** we created.

```dart
 final stream = _streamController.stream;
```

If we want to listen for changes in the created stream, we can do it like this:

```dart
 //_streamController.stream.listen(print);  
stream.listen(print);
```

If we want to send a value in the stream, we can do it like this:

```dart
 var sendedValue = '';
_streamController.sink.add(sendedValue);
```

Now, let's see how to listen to a **_Stream_** that refreshes the UI.

```dart
StreamBuilder<T>(
        // Set initial value.
        initialData:  'Hello, this is initial value.',
        // Open a stream through the StreamController.
        stream: _streamController.stream,
        // When there is a change, the widget builder will be rebuilt.
        builder: (context, AsyncSnapshot<T> snapshot) { },)
```

Now that we have learned to create and listen to streams, let’s look at an example. In this example, we will create a **_TextFormField_** and see the changes in the input displayed in a **_Text_** widget.

First, we define our **_StreamController_**, and we declare it as **_late final_** to initialize it. Since the value we will listen to is of type **_String_**, we give the **_Stream_** the generic type **_String_**.

```dart
// We define StreamController to create a Stream.
late final StreamController<String> _streamController;
```

We also define a **_TextEditingController_** for the **_TextFormField_**.

```dart
late final TextEditingController _textEditingController;
```

In the widget’s **_init_**, we initialize our **_StreamController_** and **_TextEditingController_**.

```dart
@override
void initState() {
    super.initState();
    // Initialize the StreamController.
    _streamController = StreamController<String>();
    _textEditingController = TextEditingController();
}
```

Now we can create the widget structure. We define a **_StreamBuilder_** and pass our stream from the **_StreamController_** to the **_stream_** parameter. This way, we will trigger changes in the **_Text_** widget based on the updates.

```dart
StreamBuilder<String>(
        // Set the initial value.
        initialData:
            'Hello, this field will change when there is a change in the TextFormField.',
        // Open a stream through the StreamController.
        stream: _streamController.stream,
        // When there is a change, the widget builder will be rebuilt.
        builder: (context, AsyncSnapshot<String> snapshot) {
          return SizedBox();
        })
```

The data is in **_snapshot_** format. We can access the data with **_snapshot.data_**.

```dart
StreamBuilder<String>(
        // Set the initial value.
        initialData:
            'Hello, this field will change when there is a change in the TextFormField.',
        // Open a stream through the StreamController.
        stream: _streamController.stream,
        // When there is a change, the widget builder will be rebuilt.
        builder: (context, AsyncSnapshot<String> snapshot) {
          return Text(snapshot.data ?? '');
        })
```

Let’s create our **_TextFormField_** under the **_StreamBuilder_** and provide it with the **_Controller_**.

```dart
TextFormField(controller: _textEditingController, ),
```

Now, let’s define the **_onChanged_** function for the **_TextFormField_** and send the changes to the **_Stream_** through the **_StreamController_**.

```dart
TextFormField(
              controller: _textEditingController,
              onChanged: (val) {
                // Notify the changes to the stream.
                _streamController.sink.add(val);
              },
            ),
```

Don’t forget to **_dispose_** of our **_Controllers_** when we are done.

```dart
@override
void dispose() {
    // Don't forget to close it when we're done!
    _streamController.close();
    _textEditingController.dispose();
    super.dispose();
}
```

That's it! You can run the project and observe the changes in the text.

You can access the full project [here](https://github.com/furkay/flutter_stream_example).

**Happy coding to everyone! 🙃**