package com.example.todolist

import android.os.Bundle
import android.view.View
import android.view.inputmethod.EditorInfo
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    private lateinit var taskInput: EditText
    private lateinit var addButton: Button
    private lateinit var recyclerView: RecyclerView
    private lateinit var emptyView: TextView
    private lateinit var adapter: TodoAdapter
    private val todos = mutableListOf<TodoItem>()
    private var nextId = 1L

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        taskInput = findViewById(R.id.taskInput)
        addButton = findViewById(R.id.addButton)
        recyclerView = findViewById(R.id.recyclerView)
        emptyView = findViewById(R.id.emptyView)

        setupRecyclerView()
        setupListeners()
        updateEmptyView()
    }

    private fun setupRecyclerView() {
        adapter = TodoAdapter(todos) { todo ->
            adapter.removeItem(todo)
            updateEmptyView()
        }
        
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = adapter
    }

    private fun setupListeners() {
        addButton.setOnClickListener {
            addTask()
        }

        taskInput.setOnEditorActionListener { _, actionId, _ ->
            if (actionId == EditorInfo.IME_ACTION_DONE) {
                addTask()
                true
            } else {
                false
            }
        }
    }

    private fun addTask() {
        val taskText = taskInput.text.toString().trim()
        
        if (taskText.isNotEmpty()) {
            val newTodo = TodoItem(nextId++, taskText)
            adapter.addItem(newTodo)
            taskInput.text.clear()
            updateEmptyView()
        }
    }

    private fun updateEmptyView() {
        if (todos.isEmpty()) {
            emptyView.visibility = View.VISIBLE
            recyclerView.visibility = View.GONE
        } else {
            emptyView.visibility = View.GONE
            recyclerView.visibility = View.VISIBLE
        }
    }
}
