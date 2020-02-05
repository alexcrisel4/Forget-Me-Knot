class Api::NotesController < ApplicationController

  def create 
    @note = Note.new(note_params)
    if @note.save
      render :show
    else 
      render json: @note.errors.full_messages, status: 404
    end
  end 

  def show 
    @note = Note.find_by(id: params[:id])
    if @note 
      render :show 
    end
  end 

  def index 
    
   @notes = Note.all.select{ |note| note.author_id == current_user.id }
   render :index
  end 

  def destroy
    @note = Note.find_by(id: params[:id])
    if @note
      @note.destroy 
      render :show
    end
  end 

  def update
    @note = Note.find(params[:id])
    @note.update(note_params) 
    render :show
   
  end 

  private 

  def note_params 
    params.require(:note).permit(:id, :title, :body, :author_id)
  end

end
