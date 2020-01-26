@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title,  :body, :author_id
  end
end