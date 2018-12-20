import Permissions from "../components/Permissions/Permissions";
import PleaseSignIn from "../components/PleaseSignIn/PleaseSignIn";

const PermissionsPage = props => (
	<div>
		<PleaseSignIn>
			<Permissions />
		</PleaseSignIn>
	</div>
);

export default Permissions;
