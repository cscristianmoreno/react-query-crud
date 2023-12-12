import { DialogContent, DialogTitle, Divider, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { FC, ReactNode } from "react";
import { modalModelStruct } from "../../models/modal.model";

const ModalComponent: FC<modalModelStruct> = ({ open, onClose, title, subtitle, children }: modalModelStruct): ReactNode => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog>
                <ModalClose/>
                <DialogTitle>{title}</DialogTitle>
                <Divider/>
                <DialogContent>{subtitle}</DialogContent>
                {children}
            </ModalDialog>
        </Modal>
    );
};

export default ModalComponent;