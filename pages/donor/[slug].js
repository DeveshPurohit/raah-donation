import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useRouter } from "next/router";
import moment from 'moment';
import Link from "next/link";

const Donor = () => {
    moment.locale()
    const router = useRouter()
    const data = router.query;

  const handleDownload = (name,cause,amount,date) => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text("Thank you for the precious donation", 10, 10);

    doc.setFontSize(16);
    doc.text(`Name: ${name}`, 10, 30);
    doc.text(`Cause: ${cause}`, 10, 40);
    doc.text(`amount: ${amount}`, 10, 50);
    doc.text(`date: ${date}`, 10, 60);

   

    // Save the PDF
    doc.save(`receipt_${cause}.pdf`);
  };

  return (
    <div>
        <button className="m-4 text-blue-500" type="button" onClick={handleDownload(data.name,data.cause,data.amount,moment(data.createdAt).format('LL'))}>
          Receipt downloaded.
        </button>
        <br/>
        <Link href={'/dashboard'}><button className="m-4 text-blue-500">
          go back
        </button></Link>
        

    </div>
  )
}

export default Donor