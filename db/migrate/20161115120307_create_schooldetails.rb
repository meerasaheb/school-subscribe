class CreateSchooldetails < ActiveRecord::Migration[5.0]
  def change
    create_table :schooldetails do |t|
      t.string :schoolname
      t.string :address
      t.string :city
      t.string :state
      t.string :pincode
      t.string :affiliatedboard

      t.timestamps
    end
  end
end
