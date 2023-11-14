import React from "react";
import { AiFillStar } from "react-icons/ai";

function ListingCard(props: any) {
	return (
		<div className="listing-info-card bg-white shadow-md mobile:sticky mobile:top-[100px] text-gray-600 mobile:p-4 mobile:space-y-4 mobile:rounded-lg w-full mobile:border-2
        max-mobile:flex max-mobile:items-center max-mobile:justify-between max-mobile:px-4 max-mobile:border-2 max-mobile:h-[80px]">
			<div className="flex justify-between flex-wrap">
				<p>
					<span className="font-bold text-black text-[24px]">
						${props.price}
					</span>{" "}
					night
				</p>
				<div className="flex gap-1 items-center max-mobile:hidden">
					<span className="flex items-center text-black">
						<AiFillStar /> {props.guestSatisfactionOverall}
					</span>
					<span className="decoration"></span>
					<span>{props.visibleReviewCount} reviews</span>
				</div>
			</div>

			<div className="max-mobile:hidden w-full rounded-lg border-[1px] border-gray-800 !uppercase">
				<div>
					<button className="flex justify-between w-full p-2 text-left">
						<div className="border-r border-gray-300 basis-1/2 flex flex-col">
							<span className="text-xs text-black font-semibold">
								CHECK-IN
							</span>
							<span>7/12/2022</span>
						</div>
						<div className="basis-1/2 flex flex-col">
							<span className="text-xs text-black font-semibold">
								CHECKOUT
							</span>
							<span>7/12/2022</span>
						</div>
					</button>
				</div>
				<div className="border-t border-black">
					<button className="p-2 flex flex-col text-left">
						<span className="text-xs text-black font-semibold">
							GUESTS
						</span>
						<span>1 Guest</span>
					</button>
				</div>
			</div>

			<button className="btn btn-primary btn-wide mobile:w-full flex">Reserve</button>
			<div className="max-mobile:hidden text-center">
				You won't be charged yet
			</div>
		</div>
	);
}

export default ListingCard;
