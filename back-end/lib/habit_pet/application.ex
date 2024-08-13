defmodule HabitPet.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      HabitPetWeb.Telemetry,
      HabitPet.Repo,
      {DNSCluster, query: Application.get_env(:habit_pet, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: HabitPet.PubSub},
      # Start a worker by calling: HabitPet.Worker.start_link(arg)
      # {HabitPet.Worker, arg},
      # Start to serve requests, typically the last entry
      HabitPetWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: HabitPet.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    HabitPetWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
