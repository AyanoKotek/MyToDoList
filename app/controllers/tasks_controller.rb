class TasksController < ApplicationController
  before_action :set_task, only: [:update, :edit, :destroy]

  def index
    @tasks = Task.where(user: current_user, completed: false)
    @important_tasks = Task.where(important: true)

    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.user = current_user
    if @task.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to root_path }
        format.json # Follow the classic Rails flow and look for a create.json view
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json # Follow the classic Rails flow and look for a create.json view
      end
    end
  end

  def edit

  end

  def destroy
    @task.destroy
    redirect_to root_path, status: :see_other
  end

  def destroy_done
    @tasks = Task.where(completed: true)
    raise
    @tasks.destroy
    redirect_to root_path, status: :see_other
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :important, :completed)
  end
end
