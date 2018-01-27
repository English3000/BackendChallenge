# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180126234901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.integer "player1_id", null: false
    t.integer "player2_id", null: false
    t.boolean "finished?", default: false, null: false
    t.string "score"
    t.integer "loser_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "round_id"
    t.integer "tournament_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name", null: false
    t.integer "loses", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.integer "tournament_id"
  end

  create_table "rounds", force: :cascade do |t|
    t.integer "matches", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "round_number", null: false
    t.integer "tournament_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
