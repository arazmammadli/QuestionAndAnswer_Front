
type Props = {
    answersCount:number;
    questionsCount:number;
};
export function UserStat (props:Props) {
    const {answersCount,questionsCount} = props;

    return (
        <div className="w-full">
            <div className="w-full mb-2">
                <h2 className="text-lg font-medium text-[#191c1f]">Stats</h2>
            </div>
            <div className="p-3 w-full rounded border border-solid border-gray-300">
                <div className="grid grid-cols-2">
                    <div className="p-1 w-full">
                        <p className="text-base text-[#191c1f] font-normal">{answersCount}</p>
                        <span className="text-sm leading-5 font-normal text-gray-400">answers</span>
                    </div>
                    <div className="p-1 w-full">
                        <p className="text-base text-[#191c1f] font-normal">{questionsCount}</p>
                        <span className="text-sm leading-5 font-normal text-gray-400">questions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}