import {View, Text, Modal, Pressable, StyleSheet} from 'react-native'
import React from 'react'
import {useModalStore} from '../../store/modal'
import {XMarkIcon} from 'react-native-heroicons/outline'
import RoundButton from '../atoms/RoundButton'

const ModalComponent = ({children}) => {
  const {showModal, setShowModal, modalContent} = useModalStore()
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false)
      }}
    >
      <View className="flex-1 items-center justify-center p-6">
        <View className="bg-white shadow-xl w-full h-fit p-4 rounded-xl">
          <View className="w-full flex flex-row justify-end">
            <RoundButton
              buttonText={<XMarkIcon strokeWidth={3} color="#fff" size={16} />}
              classes="!w-6 !h-6"
              textClasses="!text-xl tracking-widest align-middle text-center"
              onPressAction={() => setShowModal(!showModal)}
            />
          </View>
          {modalContent || children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})

export default ModalComponent
