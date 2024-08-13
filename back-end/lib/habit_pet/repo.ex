defmodule HabitPet.Repo do
  use Ecto.Repo,
    otp_app: :habit_pet,
    adapter: Ecto.Adapters.Postgres
end
