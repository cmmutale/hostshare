import React from "react";
import { LuChevronRight } from "react-icons/lu";

function ListingDescription(props: any) {
	return (
		<div>
			<p className="line-clamp-4 mb-4">{props.description}</p>
			<button className="btn btn-link p-0">
				Show more <LuChevronRight width={52} height={52} />{" "}
			</button>
		</div>
	);
}

export default ListingDescription;
