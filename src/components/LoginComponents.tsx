import React from "react";

interface LoginFieldProps {
  id: string;
  label: string;
  type: "email" | "password" | "text";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

export const LoginField: React.FC<LoginFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
          error
            ? "border-red-300 bg-red-50 focus:border-red-500"
            : "border-gray-200 bg-gray-50 focus:border-blue-500"
        }`}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
    <p className="text-red-700 text-sm font-medium">{message}</p>
  </div>
);

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
  variant?: "admin" | "buyer";
}

export const LoginButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  onClick,
  disabled,
  variant = "buyer",
}) => {
  const gradients = {
    admin: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    buyer:
      "from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
  };

  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      onClick={onClick}
      className={`w-full bg-gradient-to-r ${gradients[variant]} disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed mt-6`}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

interface LoginHeaderProps {
  title: string;
  subtitle: string;
  icon: string;
  variant?: "admin" | "buyer";
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({
  title,
  subtitle,
  icon,
  variant = "buyer",
}) => {
  const bgColors = {
    admin: "bg-blue-100",
    buyer: "bg-green-100",
  };

  return (
    <div className="text-center mb-8">
      <div
        className={`inline-block p-4 ${bgColors[variant]} rounded-full mb-4`}
      >
        <span className="text-4xl">{icon}</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 text-sm mt-2">{subtitle}</p>
    </div>
  );
};

interface QuickLoginButtonProps {
  email: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "admin" | "buyer";
}

export const QuickLoginButton: React.FC<QuickLoginButtonProps> = ({
  email,
  onClick,
  disabled,
  variant = "buyer",
}) => {
  const colors = {
    admin: "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700",
    buyer: "bg-green-50 hover:bg-green-100 border-green-200 text-green-700",
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`w-full px-4 py-2 ${colors[variant]} disabled:bg-gray-100 border font-medium rounded-lg transition-colors text-sm`}
      >
        Use Demo Credentials
      </button>
      <p className="text-xs text-gray-500 mt-2 text-center font-mono">
        {email}
      </p>
    </>
  );
};
