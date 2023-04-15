class AddImportantToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :important, :boolean, default: false
  end
end
