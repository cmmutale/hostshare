import React from "react";

function ListingAmenities(props: any) {
	let amenitiesCount = props.amenities_data.count;
	
	return (
		<div>
			<div className="grid grid-cols-2 mb-4">
				ListingAmenities
				{props.amenities_data.data
					.slice(0, 6)
					.map((item: any, index: any) => {
						return (
							<p key={index} className="text-gray-600">
								{item.title}
							</p>
						);
					})}
			</div>
			<button className="btn btn-outline">
				Show all {amenitiesCount} amenities
			</button>
		</div>
	);
}

export default ListingAmenities;
