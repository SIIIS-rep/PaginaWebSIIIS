// validation rules for forms
export const FormValidate = () => {
	return {
		required: {
			value: true,
			message: "Este campo es requerido",
		},
		patternEmailRegister: {
			value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
			message: "El email no es válido. Recuerda que debes registrarte con el correo institucional",
		},
		patternEmail: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			message: "El email no es válido.",
		},
		setValues: (value) => value.trim(),
		patternPassword: {
			value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
			message:
				"La contraseña debe tener al menos una mayúscula, una minúscula, un número y un caracter especial",
		},
		setValues: (value) => value.trim(),
		validateEmptyField: {
			trim: (value) => {
				if (!value.trim()) {
					return "El campo no puede estar vacío";
				} else {
					return true;
				}
			},
		},
		validateEqualsPasswords(getValues) {
			return {
				equals: (value) =>
					value === getValues("password") ||
					"Las contraseñas no coinciden",
			};
		},
	};
};