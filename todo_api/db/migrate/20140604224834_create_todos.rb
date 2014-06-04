class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :todo_item
      t.boolean :todo_status
      t.text :todo_note

      t.timestamps
    end
  end
end
