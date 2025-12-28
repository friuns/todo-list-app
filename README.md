# Todo List Android App

A simple and elegant Todo List application for Android.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed with checkbox
- ✅ Delete tasks
- ✅ Visual strikethrough for completed tasks
- ✅ Clean and modern Material Design UI
- ✅ Empty state message when no tasks

## Requirements

- Android Studio Arctic Fox or later
- Android SDK 24 or higher (Android 7.0)
- Java 17
- Gradle 8.1.0

## Building the Project

### Using Android Studio

1. Open Android Studio
2. Select "Open an Existing Project"
3. Navigate to the project directory and select it
4. Wait for Gradle to sync
5. Click "Run" button or press Shift+F10

### Using Command Line

1. Navigate to the project directory
2. Build the project:
   ```bash
   ./gradlew build
   ```

3. Install on connected device/emulator:
   ```bash
   ./gradlew installDebug
   ```

## Project Structure

```
app/
├── src/main/
│   ├── java/com/example/todolist/
│   │   ├── MainActivity.kt       # Main activity with UI logic
│   │   ├── TodoAdapter.kt        # RecyclerView adapter
│   │   └── TodoItem.kt           # Data model
│   ├── res/
│   │   ├── layout/
│   │   │   ├── activity_main.xml # Main screen layout
│   │   │   └── item_todo.xml     # Todo item layout
│   │   └── values/
│   │       ├── strings.xml       # String resources
│   │       ├── colors.xml        # Color resources
│   │       └── themes.xml        # App theme
│   └── AndroidManifest.xml
└── build.gradle
```

## Technologies Used

- **Kotlin** - Primary programming language
- **Android SDK** - Android development platform
- **Material Design Components** - UI components
- **RecyclerView** - Efficient list display
- **ConstraintLayout** - Flexible layouts
- **ViewBinding** - Type-safe view access

## License

This project is open source and available under the MIT License.
