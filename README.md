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

- Android Studio Arctic Fox or later (recommended)
- Android SDK 24 or higher (Android 7.0)
- Java 17
- Gradle 7.4+

## Building the Project

### Using Android Studio (Recommended)

1. Open Android Studio
2. Select "Open an Existing Project"
3. Navigate to the project directory and select it
4. Wait for Gradle to sync and download dependencies
5. Click "Run" button or press Shift+F10 to build and run

Android Studio will automatically:
- Download the required Android SDK components
- Download all dependencies
- Set up the Gradle wrapper
- Build the APK

### Using Command Line (Requires Android SDK)

If you have Android SDK installed and configured:

1. Set ANDROID_HOME environment variable:
   ```bash
   export ANDROID_HOME=/path/to/android-sdk
   ```

2. Navigate to the project directory
3. Generate wrapper (first time only):
   ```bash
   gradle wrapper
   ```

4. Build the project:
   ```bash
   ./gradlew build
   ```

5. Install on connected device/emulator:
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

## How It Works

The app uses a simple architecture:

1. **MainActivity** - Handles user input and manages the todo list
2. **TodoAdapter** - Connects the data to the RecyclerView
3. **TodoItem** - Data class representing a single todo item

Users can:
- Type a task in the input field and click "Add Task" or press Enter
- Check/uncheck tasks to mark them as complete/incomplete
- Delete tasks using the delete button on each item
- See an empty state message when there are no tasks

## License

This project is open source and available under the MIT License.

