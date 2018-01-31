ActiveRecord::Schema.define(version: 20180131184824) do

  enable_extension "plpgsql"

  create_table "needs", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "category"
    t.integer "unit"
    t.string "unit_type"
    t.string "frequency"
    t.date "posted_date"
    t.date "fulfill_by_date"
    t.boolean "fulfilled", default: false
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
    t.integer "unit"
    t.string "unit_type"
    t.string "frequency"
    t.date "available_date"
    t.date "claim_by_date"
    t.boolean "claimed", default: false
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
    t.string "name"
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
