import './style.css'

function ListingDetails(props: any) {
	return (
		<div className="spacer--decoration listing-details">
			<ul className="flex items-center gap-2">
				{props.details.data.map((item: any, index: any) => {
					return (
						<li key={index} className='relative flex items-center gap-2'>
							{item.value} {item.type}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ListingDetails;
