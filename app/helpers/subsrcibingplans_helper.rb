module SubsrcibingplansHelper
	def checked(area)
		@subsrcibingplan.features.nil? ? false : @subsrcibingplan.features.match(area)
	end
end
