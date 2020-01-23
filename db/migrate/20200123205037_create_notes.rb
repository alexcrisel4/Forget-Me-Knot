class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :author_id, null: false, index: true
      t.text :body, null: false
      t.string :title
      t.boolean :label, default: false
      t.string :reminder 
      t.timestamps
    end
  end
end
