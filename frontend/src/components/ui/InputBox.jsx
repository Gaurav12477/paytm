export function InputBox({label, type, placeholder, onChange}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input type={type} onChange={onChange} placeholder={placeholder} className="w-full px-3 py-3 border-2 rounded border-lightBlue rounded-xl hover:border-lightBlue hover:bg-slate-100 " />
    </div>
}