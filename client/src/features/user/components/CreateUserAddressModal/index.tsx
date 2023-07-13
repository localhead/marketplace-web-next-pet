import { CitySelectFieldAdapter } from "@features/cities/components/CitySelectFieldAdapter";
import { Form } from "@features/forms/components/Form";
import { InputFieldAdapter } from "@features/forms/components/InputFieldAdapter";
import { UserAddressRecord, userApi } from "@features/user/store";
import { Button, Modal, ModalProps } from "@packages/uiKit";
import { Col, Row } from "antd";
import { FC, memo, useCallback } from "react";
import {
  useCreateUserAddressForm,
  UseCreateUserAddressFormParams,
} from "./hooks";

export interface CreateUserAddressModalProps extends Omit<ModalProps, "title"> {
  onCreate?: (address: UserAddressRecord) => void;
}

const Inner: FC<Pick<CreateUserAddressModalProps, "onCreate">> = ({
  onCreate,
}) => {
  const [addAddressM, { isLoading }] = userApi.useAddAddressMutation();

  const submitHandler: UseCreateUserAddressFormParams["onSubmit"] = useCallback(
    async (data) => {
      const response = await addAddressM({
        ...data,
        region: data.region.id,
      }).unwrap();
      onCreate?.(response);
    },
    [addAddressM, onCreate]
  );
  const { control, handleSubmit } = useCreateUserAddressForm({
    onSubmit: submitHandler,
  });

  return (
    <Form>
      <Form.Content>
        <Row gutter={[15, 15]}>
          <Col span={24} sm={12} lg={8}>
            <CitySelectFieldAdapter
              control={control}
              name="region"
              label="Город"
              placeholder="Москва"
            />
          </Col>
          <Col span={24} sm={12} lg={8}>
            <InputFieldAdapter
              control={control}
              name="address"
              label="Адрес"
              placeholder="ул. Восстания, дом 56"
            />
          </Col>
          <Col span={12} lg={4}>
            <InputFieldAdapter
              control={control}
              name="apt"
              label="Кв/офис"
              placeholder="45"
            />
          </Col>
          <Col span={12} lg={4}>
            <InputFieldAdapter
              control={control}
              name="postcode"
              label="Почтовый индекс"
              placeholder="45"
            />
          </Col>
        </Row>
      </Form.Content>
      <Form.ButtonsContainer>
        <Button size="large" onClick={handleSubmit} disabled={isLoading}>
          Добавить
        </Button>
      </Form.ButtonsContainer>
    </Form>
  );
};

const _CreateUserAddressModal: FC<CreateUserAddressModalProps> = (props) => {
  const { onCreate, ...restProps } = props;

  return (
    <Modal title="Добавление адреса" {...restProps}>
      <Inner onCreate={onCreate} />
    </Modal>
  );
};

export const CreateUserAddressModal = memo(_CreateUserAddressModal);
