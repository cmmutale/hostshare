import React from "react";
import Slider from "../gallery/Slider";
import MasonryGrid from "../gallery/MasonryGrid";

function ListingGallery(props: any) {
	return (
		<div className="">
			<div className="mobile:hidden">
				<Slider images={props.images} width={`100%`} height={300} />
			</div>
			<div className="max-mobile:hidden">
				<MasonryGrid images={props.images} />
			</div>
		</div>
	);
}

export default ListingGallery;
