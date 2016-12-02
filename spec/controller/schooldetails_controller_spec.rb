require "rails_helper"

describe SchooldetailsController, :type => :controller do
   
    context "Test" do 
    it "should be create record" do
      # assign
     
      author = Schooldetail.create(schoolname: "raj",address: "sss",city: "city",state: "aa",pincode: "1",affiliatedboard:"CBSE")
      p author
      p author.id
      # u = Test.find(author.id)
      # u = Test.update(id:author.id,name: "foo")
      # p u
      #   Test.destroy(author.id)
      # u = Test.find(author.id)
   

     
      # get :index
       # expect(response).to eq([author]) 
      
    end

    
    end

  end
