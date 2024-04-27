export interface ButtonProps {
    children: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string
}

export interface RootState {
    action: {
      sidenav: boolean;
      // Add other properties if needed
    };
  }
  