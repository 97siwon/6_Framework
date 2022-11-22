package edu.kh.project.board.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.project.board.model.vo.Board;
import edu.kh.project.board.model.vo.Pagination;

@Repository
public class BoardDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 게시판 이름 목록 조회
	 * @return boardTypeList
	 */
	public List<Map<String, Object>> selectBoardType() {
		return sqlSession.selectList("boardMapper.selectBoardType");
	}

	/** 게시글 수 조회
	 * @param boardCode
	 * @return listCount
	 */
	public int getListCount(int boardCode) {
		return sqlSession.selectOne("boardMapper.getListCount", boardCode);
	}

	/** 특정 게시판 목록 조회
	 * @param pagination
	 * @param boardCode
	 * @return
	 */
	public List<Board> selectBoardList(Pagination pagination, int boardCode) {
		
		// RowBounds 객체(마이바티스)
		// - 여러 행 조회 결과 중 특정 위치부터 지정된 행의 개수만 조회하는 객체
		//                       (몇 행을 건너 뛸 것 인가?)
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new  RowBounds(offset, pagination.getLimit());
		
		
		return sqlSession.selectList("boardMapper.selectBoardList", boardCode, rowBounds);
		                             // namespace.id              , 파라미터 , RowBounds 객체
		                             //                             파라미터가 없을 경우 null 대입
	}

	/** 게시물 상세 조회 + 이미지 목록 조회 + 댓글 목록 조회 DAO
	 * @param boardNo
	 * @return
	 */
	public Board selectBoardDetail(int boardNo) {
		
		return sqlSession.selectOne("boardMapper.selectBoardDetail", boardNo);
	}

	/** 게시글 상세 조회 성공 시 조회 수 증가
	 * @param boardNo
	 * @return
	 */
	public int updateReadCount(int boardNo) {
		return sqlSession.update("boardMapper.updateReadCount", boardNo);
	}

	/** 좋아요
	 * @param map
	 * @return
	 */
	public int boardLikeCheck(Map<String, Object> map) {
		return sqlSession.selectOne("boardMapper.boardLikeCheck", map);
	}

	/** 좋아요 수 증가
	 * @param paramMap
	 * @return
	 */
	public int boardLikeUp(Map<String, Object> paramMap) {
		return sqlSession.insert("boardMapper.boardLikeUp", paramMap);
	}

	/** 좋아요 수 감소
	 * @param paramMap
	 * @return
	 */
	public int boardLikeDown(Map<String, Object> paramMap) {
		return sqlSession.delete("boardMapper.boardLikeDown", paramMap);
	}

	/** 게시물 삭제
	 * @return
	 */
	public int boardDelete(int boardNo) {
		return sqlSession.update("boardMapper.boardDelete", boardNo);
	}

	/** 게시글 삽입
	 * @param board
	 * @return
	 */
	public int boardWrite(Board board) {
		
		int result = sqlSession.insert("boardMapper.boardWrite", board);
		// board의 boardNo필드
		// -> <selectKey>로 인해서 생성된 시퀀스 값이 세팅되어있음.
		
		
		return 0;
	}
	
	
	
	
	
	
	
	
	
	
	
}
