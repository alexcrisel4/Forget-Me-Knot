@notes.each do |note|
  json.set! note.id do
    json.extract! quiz, :id, :title,  :body, :author_id
  end
end