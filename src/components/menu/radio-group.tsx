import { IntrinsicComponentProps } from "../types";
import { processProps } from "../utilities";
import { ContextMenu, DropdownMenu } from "@kobalte/core";
import { Dynamic } from "solid-js/web";

export type MenuRadioGroupProps = IntrinsicComponentProps<
	"div",
	{
		type: "contextmenu" | "dropdown";
		disabled?: boolean;
		onChange?: (value: string) => void;
	} & Omit<
		DropdownMenu.DropdownMenuRadioGroupProps,
		"isDisabled" | "onValueChange"
	>
>;

export function MenuRadioGroup(props: MenuRadioGroupProps) {
	const [local, others] = processProps({
		props,
		keys: ["disabled", "onChange", "type"],
	});

	return (
		<Dynamic
			component={
				{
					contextmenu: ContextMenu.RadioGroup,
					dropdown: DropdownMenu.RadioGroup,
				}[local.type]
			}
			isDisabled={local.disabled}
			onValueChange={local.onChange}
			{...others}
		/>
	);
}