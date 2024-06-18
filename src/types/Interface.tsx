export interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string
}

export interface InputProps {
  label: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string
}

export interface AccordionItem {
    title: string;
    icon: React.ReactNode;
    content: string;
    isOpen?: boolean;
}

export interface RootState {
  action: {
    sidenav: boolean;
    // Add other properties if needed
  };
}
