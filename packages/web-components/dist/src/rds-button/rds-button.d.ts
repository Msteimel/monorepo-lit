import { LitElement, html } from "lit";
interface RdsButtonProps {
    className?: string;
    variant: "primary" | "secondary" | "tertiary";
    disabled: boolean;
    size: "small" | "medium" | "large";
    onClick?: (_e: Event) => void;
}
export declare class RdsButton extends LitElement implements RdsButtonProps {
    fullWidth: boolean;
    className: string;
    variant: RdsButtonProps["variant"];
    disabled: boolean;
    size: RdsButtonProps["size"];
    onClick: RdsButtonProps["onClick"];
    static styles: import("lit").CSSResult;
    private _handleClick;
    render(): ReturnType<typeof html>;
}
export {};
//# sourceMappingURL=rds-button.d.ts.map