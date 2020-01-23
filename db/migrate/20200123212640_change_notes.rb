class ChangeNotes < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :reminder
    remove_column :notes, :label
  end
end
