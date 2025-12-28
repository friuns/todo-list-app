package com.example.todolist

data class TodoItem(
    val id: Long,
    var text: String,
    var isCompleted: Boolean = false
)
