import List from './List'
import {useGetListsQuery, useDeleteListsMutation, useAddListsMutation, useUpdateListMutation} from '../../service/listsService';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddList from '../../components/AddElement';

const Lists = () => {
    
  const listEle = useRef('');

  /* FUNZIONE ELIMINAZIONE LISTE TRAMITE RTK QUERY */
  const [removeList, {isLoading:isDeleting, isSuccess:isDelSuccess, error:deleteError, isError:isDeleteError}] = useDeleteListsMutation();
  // I mutations al contrario dei query ritornano una funzione (removeList) che poi può essere richiamata per fare la dispatch
  /* FINE FUNZIONE ELIMINAZIONE LISTE */


    /* FUNZIONE ELIMINAZIONE LISTE TRAMITE RTK QUERY */
  const [addList, {isLoading:isAdding, isSuccess:isAddSuccess, error:addError, isError:isAddError}] = useAddListsMutation();
    /* FINE FUNZIONE ELIMINAZIONE LISTE */


      /* FUNZIONE ELIMINAZIONE LISTE TRAMITE RTK QUERY */
  const [updateList, {isLoading:isUpdating, isSuccess:isUpdSuccess, error:updateError, isError:isUpdateError}] = useUpdateListMutation();
       /* FINE FUNZIONE ELIMINAZIONE LISTE */


    /* IMPORTAZIONE LISTE */
  const {data: lists = [], isError, isLoading, isFetching, refetch:reloadLists } = useGetListsQuery();

    /* FINE IMPORTAZIONE LISTE */



    useEffect(() => {

      if(isFetching){
        toast.info('Loading lists');
      }
      if(!isFetching){
        toast.dismiss();
      }
      if(isError){
        toast.error('Errore lista');
      }
  
      return () => {
  
      }
    }, [isError, isFetching])


    const manageClick = (evt) =>{

      evt.preventDefault();
      addList({name: listEle.current.value, user_id: 1 })

    }
    if(isAddSuccess){
      listEle.current.value ='';
    }

    return(
      <>
      <h1>Le mie liste</h1>
      <AddList listEle={listEle} manageClick={manageClick} />
        <ul className="list-group list-group-flush">
      {lists.map(list => <List onRemoveList={removeList}
      /* NEL CASO IN CUI NON USASSIMO GLI INVALIDTAGS
      onRemoveList={ (id)=>{
        removeList(id).unwrap().then(res=>{
          reloadLists();
        }).catch(err =>{toast.error(err.message)})
      }
        } */
         key={list.id} list={list} />)}

      </ul>
      </>
    )

}


export default Lists;