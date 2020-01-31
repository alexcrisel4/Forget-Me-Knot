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
    @note = Note.find_by(params[:id])
    if @note 
      render :show 
    else 
      render json: @note.errors.full_messages, status: 404
    end
  end 

  def index 
   @notes = Note.all.select{ |note| note.author_id == current_user.id }
   render :index
  end 

  def destroy
    @note = Note.find_by(params[:id])
    if @note
      @note.destroy 
      render :show
    end
  end 

  def update
    @note = Note.find_by(params[:id])
    if @note.update(note_params) 
      render :show
    else 
      render json: @note.errors.full_messages
    end
  end 

  private 

  def note_params 
    params.require(:note).permit(:title, :body, :author_id)
  end

end
