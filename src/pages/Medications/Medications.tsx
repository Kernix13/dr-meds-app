import { FC } from "react";
import style from "./Medications.module.scss";
import { Pill, Tablets } from "lucide-react";

const Medications : FC = () => {
	return <div className={style.medications}>
		<div>
			<Pill color="#0F0E38" />
			<Tablets color="#0F0E38" />
		</div>
	</div>;
};

export default Medications;