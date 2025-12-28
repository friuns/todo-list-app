package com.example.todolist

import android.graphics.Paint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.ImageButton
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class TodoAdapter(
    private val todos: MutableList<TodoItem>,
    private val onDelete: (TodoItem) -> Unit
) : RecyclerView.Adapter<TodoAdapter.TodoViewHolder>() {

    class TodoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val checkBox: CheckBox = itemView.findViewById(R.id.checkBox)
        val taskText: TextView = itemView.findViewById(R.id.taskText)
        val deleteButton: ImageButton = itemView.findViewById(R.id.deleteButton)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TodoViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_todo, parent, false)
        return TodoViewHolder(view)
    }

    override fun onBindViewHolder(holder: TodoViewHolder, position: Int) {
        val todo = todos[position]
        
        holder.taskText.text = todo.text
        holder.checkBox.isChecked = todo.isCompleted
        
        // Apply strikethrough if completed
        if (todo.isCompleted) {
            holder.taskText.paintFlags = holder.taskText.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
        } else {
            holder.taskText.paintFlags = holder.taskText.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
        }
        
        // Remove previous listener to prevent issues
        holder.checkBox.setOnCheckedChangeListener(null)
        holder.checkBox.setOnCheckedChangeListener { _, isChecked ->
            todo.isCompleted = isChecked
            // Apply strikethrough immediately
            if (isChecked) {
                holder.taskText.paintFlags = holder.taskText.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
            } else {
                holder.taskText.paintFlags = holder.taskText.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
            }
        }
        
        holder.deleteButton.setOnClickListener {
            onDelete(todo)
        }
    }

    override fun getItemCount() = todos.size

    fun addItem(todo: TodoItem) {
        todos.add(todo)
        notifyItemInserted(todos.size - 1)
    }

    fun removeItem(todo: TodoItem) {
        val position = todos.indexOf(todo)
        if (position != -1) {
            todos.removeAt(position)
            notifyItemRemoved(position)
        }
    }
}
