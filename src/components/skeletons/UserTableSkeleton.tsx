import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonUserTableRow() {
  return (
    <tr className="border-t border-gray-200 transition odd:bg-white even:bg-gray-50 hover:bg-gray-100">
      <td className="px-6 py-4">
        <Skeleton circle height={48} width={48} />
      </td>
      <td className="px-6 py-4 font-medium">
        <Skeleton width={120} height={20} />
      </td>
      <td className="px-6 py-4 text-gray-600">
        <Skeleton width={180} height={16} />
      </td>
    </tr>
  );
}
