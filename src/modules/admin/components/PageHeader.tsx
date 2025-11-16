interface PageHeaderProps {
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    titleColor?: string;
}

export function PageHeader({
    title,
    subtitle,
    actions,
    titleColor = "text-[#401A4D]",
}: PageHeaderProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
            <div className="flex flex-col">
                <h1
                    className={`text-heading1 font-bricolage ${titleColor} ${
                        subtitle ? "mb-2" : ""
                    }`}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-base text-[#827487] font-sf-pro">
                        {subtitle}
                    </p>
                )}
            </div>

            {actions && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {actions}
                </div>
            )}
        </div>
    );
}
