defmodule HabitPetWeb.WelcomeController do
  use HabitPetWeb, :controller


  def index(conn, _params) do
    conn
    |> json(%{message: "Welcome to Habit Pet Api"})
  end
end
