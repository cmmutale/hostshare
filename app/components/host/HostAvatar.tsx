function HostAvatar(props:any) {
	return (
		<div>
			<img
				src={props.image_url}
				alt="host avatar"
				className="w-[56px] h-[56px] rounded-full"
			/>
		</div>
	);
}

export default HostAvatar;
