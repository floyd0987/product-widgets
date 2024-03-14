import Logo from '@/assets/logo'

interface BadgeProps {
  color?: { name: string; bgColor: string; textColor: string };
  amount: number;
  action: string;
  type: string;
}


const Badge = (props: BadgeProps) => {

  const { color, amount, action, type } = props;

  return (
    <div
      className="badge flex p-4 rounded-xl shadow-md  items-center gap-6"
      style={{
        backgroundColor: color?.bgColor || "white",
        color: color?.textColor || "black",
      }}
    >
      <div>
        <Logo fill={color?.textColor} />
      </div>

      <div className="flex flex-col	items-start">
        <div className="text-xs font-light">This product {action}</div>

        <h2 className="text-lg font-semibold">
          {amount}
          {type === "carbon" ? "kgs of " : " "}
          {type}
        </h2>
      </div>
    </div>
  )
}

export default Badge