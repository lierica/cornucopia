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

ActiveRecord::Schema.define(version: 20180131184824) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "needs", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "category"
    t.integer "units"
    t.string "unit_type"
    t.string "location"
    t.date "posted_date"
    t.date "fulfill_by_date"
    t.boolean "fulfilled", default: false
    t.integer "user_id"
    t.integer "charity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "sector"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "surplus_needs", force: :cascade do |t|
    t.bigint "surplus_id"
    t.bigint "need_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["need_id"], name: "index_surplus_needs_on_need_id"
    t.index ["surplus_id"], name: "index_surplus_needs_on_surplus_id"
  end

  create_table "surpluses", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "category"
    t.integer "units"
    t.string "unit_type"
    t.string "location"
    t.date "available_date"
    t.date "claim_by_date"
    t.boolean "claimed", default: false
    t.integer "user_id"
    t.integer "corporation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_surpluses", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "surplus_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["surplus_id"], name: "index_user_surpluses_on_surplus_id"
    t.index ["user_id"], name: "index_user_surpluses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.string "email"
    t.string "phone"
    t.string "password_digest"
    t.integer "charity_id"
    t.integer "corporation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "surplus_needs", "needs"
  add_foreign_key "surplus_needs", "surpluses"
  add_foreign_key "user_surpluses", "surpluses"
  add_foreign_key "user_surpluses", "users"
end
