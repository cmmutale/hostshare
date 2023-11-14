import React from "react";

function ListingImage(props: any) {
	return (
		<div className="bg-[#1e1e1e] h-full w-full">
			<img
				src={props.image_url}
				alt="listing image"
				className="hover:opacity-90"
			/>
		</div>
	);
}

export default ListingImage;
