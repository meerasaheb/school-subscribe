
class Subsrcibingplan < ApplicationRecord
     # validates :subject, presence: true 
  
	before_save do 
		self.features.gsub!(/[\[\]\"]/,"") if attribute_present?("features")
	end


end
