import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :habit_pet, HabitPet.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "habit_pet_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: System.schedulers_online() * 2

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :habit_pet, HabitPetWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "01RE9Ia/PP9M6b3eZ4kXA6KvvdoD2P69x+2ThNQqzZ3uX8z6zMFi6jWj0UR4ZMRD",
  server: false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
