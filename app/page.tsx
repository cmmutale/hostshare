import FilterRow from "./components/listingstuff/FilterRow";
import ListingGrid from "./components/listingstuff/ListingGrid";
import Header from "./components/header/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<FilterRow />
			<ListingGrid />
		</div>
	);
}
